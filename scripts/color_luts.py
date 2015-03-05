import glob
import os

files = map(os.path.abspath, glob.glob("luts/*.lut"))

luts = []
for path in files:
    base, filename = os.path.split(path)
    lut_name = os.path.splitext(filename)[0]
    lut_name = 'LUT' + ''.join([part.capitalize() for part in lut_name.replace('_','-').split('-')])
    with open(path) as fp:
        lut_data = fp.read()

    ok = False
    if(lut_data[:4] == 'ICOL'):
        ok = True
        i=32;
        reds = map(ord, lut_data[i:i+256])
        i+=256;
        greens = map(ord, lut_data[i:i+256])
        i+=256;
        blues = map(ord, lut_data[i:i+256])
        i+=256;

    elif (lut_data[:5] == "Index"):
        lines = lut_data.split("\n")
    
    if ok:
        args = []
        for colors in (reds, greens, blues):
            args.append('[' + ','.join(['0x%02x' % color for color in colors]) + ']')
        luts.append(lut_name + ' = new LUT(' +  ','.join(args) + ',"' + lut_name + '");\n')


with open('luts.js', 'w') as fp:
    with open('luts.js.in') as fp2:
        fp.write(fp2.read())
    for lut in luts:
        fp.write(lut)