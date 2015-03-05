kernel = '''
X1X
011
00X
'''
def make_skel_luts():
    ak = '''
000
X1X
111
'''

    bk = '''
X00
110
X1X
'''
    i=0
    names = 'abcdefghi'
    while(i<8):
        alut = create_lut_from_kernel(ak, rot=False)
        print jslut(alut, 'lut_' + names[i])
        i+=1
        blut = create_lut_from_kernel(bk, rot=False)
        print jslut(blut, 'lut_' + names[i])
        i+=1
        ak = rotate_kernel_90(ak)
        bk = rotate_kernel_90(bk)

def make_consolidated_skel_luts():
    ak = '''
000
X1X
111
'''

    bk = '''
X00
110
X1X
'''
    alut = create_lut_from_kernel(ak, rot=True)
    print jslut(alut, 'lut_a')
    blut = create_lut_from_kernel(bk, rot=True)
    print jslut(blut, 'lut_b')


def jslut(lut, name):
    return 'var ' + name + ' = [' + ','.join(['1' if x else '0' for x in lut]) + ']'

def create_lut_from_kernel(kernel, rot=True):
    masks = kernel_to_masks(kernel)
    if(rot):
        masks_90 = rotate_masks_90(masks)
        masks_180 = rotate_masks_90(masks_90)
        masks_270 = rotate_masks_90(masks_180)
       
        ones = (masks['1'], masks_90['1'], masks_180['1'], masks_270['1'])
        zeroes = (masks['0'], masks_90['0'], masks_180['0'], masks_270['0'])
        dont_cares = (masks['X'], masks_90['X'], masks_180['X'], masks_270['X'])
    else:
        ones = (masks['1'],)
        zeroes = (masks['0'],)
        dont_cares = (masks['X'],)

    lut = [False]*256

    for mask in range(256):
        accept = False
        for one, zero, dc in zip(ones, zeroes, dont_cares):
            o = mask & (~dc & 0xff)
            z = (~mask & 0xff) & (~dc & 0xff)
            if not (o ^ one) and (o ^ zero):
                accept=True
                break
        lut[mask] = accept

    return lut

def check_all_kernels(standard):
    lut = create_lut_from_kernel(standard)
    for i in range(256):
        print i
        print mask_to_neighborhood(i),
        print standard,
        print lut[i]
        print '-'*20
        raw_input()
def check_kernel(test, standard):
    lut = create_lut_from_kernel(standard)
    val = kernel_to_neighborhood(test)
    print test
    return lut[val]

def rotate_masks_90(masks):
    retval = {'0':0,'1':0,'X':0}
    for key, mask in masks.items():
        retval[key] = ((mask << 2) & 0xff) | ((mask >> 6))
    return retval

def rotate_kernel_90(kernel):
    masks = kernel_to_masks(kernel)
    rmasks = rotate_masks_90(masks)
    return masks_to_kernel(rmasks)

def kernel_to_neighborhood(kernel):
    masks = kernel_to_masks(kernel)
    return masks['1']

def mask_to_neighborhood(mask):
    d = {'1':mask,'0':~mask & 0xff,'X':0}
    return masks_to_kernel(d)

def kernel_to_masks(kernel):
    kernel = kernel.strip()
    (nw,n,ne),(w,c,e),(sw,s,se) = kernel.split('\n')
    keys = {'1':0,'0':0,'X':0}
    for key in keys:
        keys[key] |= ((1 << 0) if n == key else 0)
        keys[key] |= ((1 << 1) if ne == key else 0)
        keys[key] |= ((1 << 2) if e == key else 0)
        keys[key] |= ((1 << 3) if se == key else 0)
        keys[key] |= ((1 << 4) if s == key else 0)
        keys[key] |= ((1 << 5) if sw == key else 0)
        keys[key] |= ((1 << 6) if w == key else 0)
        keys[key] |= ((1 << 7) if nw == key else 0)
    return keys

def masks_to_kernel(masks):
    kernel = [' ',' ',' ','\n',' ','1',' ','\n',' ',' ',' ']
    for key,mask in masks.items():
        if mask & (1 << 0): kernel[1] = key # N
        if mask & (1 << 1): kernel[2] = key # NE
        if mask & (1 << 2): kernel[6] = key # E
        if mask & (1 << 3): kernel[10] = key # SE
        if mask & (1 << 4): kernel[9] = key # S
        if mask & (1 << 5): kernel[8] = key # SW
        if mask & (1 << 6): kernel[4] = key # W
        if mask & (1 << 7): kernel[0] = key # NW
    return '\n' + ''.join(kernel) + '\n'

