#!/usr/bin/env python3

import re, os

def main1():
    machine = re.compile('[0-9]{2}-([A-Z]) *-([^.]+).mp3')
    for file in os.listdir():
        m = machine.match(file)
        if m:
            tone = m.group(1)
            type = m.group(2)
            newFileName = genNewName(tone, type)
            print('mv "%s" "%s"' % (file, newFileName))

def genNewName(tone, type):
    types = { '小字组': 4, '小字1组': 5, '小字2组': 6 }
    assert type in types
    return '%s%s.mp3' % (tone, types[type])


def main2():
    machine = re.compile('([A-Z])([0-9]).mp3')

    types = {'4': 'L', '5': '', '6': 'H'}
    tones = {'C': 'do', 'D': 're', 'E': 'mi', 'F': 'fa', 'G': 'so', 'A': 'la', 'B': 'si'}

    for f in os.listdir():
        m = machine.match(f)
        if m:
            tone = m.group(1)
            type = m.group(2)
            print("<canvas id='%s%s' src='assert/%s' autostart='false'></audio>" % \
                      (tones[tone], types[type], f))
        else:
            print('error' + f)

def main3():
    tones = ['do', 're', 'mi', 'fa', 'so', 'la', 'si']
    types = ['L', '', 'H']
    

if __name__ == '__main__':
    main2()
