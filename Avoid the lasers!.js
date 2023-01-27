/*
@title: Avoid the lasers!
@author: 8xj / Taiki

        Instructions:

Get to the black and grey block.
Dont get hit by the lasers.
green blocks with red stripe= lasers
There may be some secret blocks!
If you want to spoiler them, go down to [secret, bitmap`???`],

                    Controlls: 
          
                        W
                      A S D

Note: Sorry if there is not crossing lasers,
because I was really tired when I finished all of this!
*/

const player1 = "0"
const player2 = "1"
const wall = "2"
const upLaser = "3"
const downLaser = "4"
const leftLaser = "5"
const rightLaser = "6"
const vert = "7"
const horz = "8"
const target = "9"
const background = "b"
const secret = "s"
const info = "i"
const cross = "c"

//Danger spoilers!
setLegend(
  [ player1, bitmap`
................
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
.DD3........3DD.
.DD.3.3333.3.DD.
.DD..3....3..DD.
.DD.3......3.DD.
.DD.3.9..9.3.DD.
.DD.3......3.DD.
.DD.3..99..3.DD.
.DD..3....3..DD.
.DD.3.3333.3.DD.
.DD3........3DD.
.DDDDDDDDDDDDDD.
.DDDDDDDDDDDDDD.
................` ],
  [ player2, bitmap`
................
.55555555555555.
.55555555555555.
.557........755.
.55.7.7777.7.55.
.55..7....7..55.
.55.7......7.55.
.55.7.4..4.7.55.
.55.7......7.55.
.55.7..44..7.55.
.55..7....7..55.
.55.7.7777.7.55.
.557........755.
.55555555555555.
.55555555555555.
................` ],
  [ wall, bitmap`
0000000000000000
00DDDDD33DDDDD00
0D0DDDD33DDDD0D0
0DD0DDD33DDD0DD0
0DDD0DD33DD0DDD0
0DDDD0D33D0DDDD0
0DDDDD0330DDDDD0
0333333003333330
0333333003333330
0DDDDD0330DDDDD0
0DDDD0D33D0DDDD0
0DDD0DD33DD0DDD0
0DD0DDD33DDD0DD0
0D0DDDD33DDDD0D0
00DDDDD33DDDDD00
0000000000000000` ],
  [ upLaser, bitmap`
DDDDDDD33DDDDDDD
DDDDDD3333DDDDDD
DDDDD333333DDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
3333333333333333
3333333333333333
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD` ],
  [ rightLaser, bitmap`
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDD3DD
DDDDDDD33DDDD33D
3333333333333333
3333333333333333
DDDDDDD33DDDD33D
DDDDDDD33DDDD3DD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD` ],
  [ downLaser, bitmap`
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
3333333333333333
3333333333333333
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDD333333DDDDD
DDDDDD3333DDDDDD
DDDDDDD33DDDDDDD` ],
  [ leftLaser, bitmap`
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DD3DDDD33DDDDDDD
D33DDDD33DDDDDDD
3333333333333333
3333333333333333
D33DDDD33DDDDDDD
DD3DDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD` ],
  [ vert, bitmap`
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD` ],
  [ horz, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
3333333333333333
3333333333333333
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD` ],
  [ target, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L111111111111L0
0L100000000001L0
0L10LLLLLLLL01L0
0L10LFFFFFFL01L0
0L10LFHHHHFL01L0
0L10LFH99HFL01L0
0L10LFH99HFL01L0
0L10LFHHHHFL01L0
0L10LFFFFFFL01L0
0L10LLLLLLLL01L0
0L100000000001L0
0L111111111111L0
0LLLLLLLLLLLLLL0
0000000000000000`],
  [ background, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L111111111111L0
0L1LLLLLLLLLL1L0
0L1L11111111L1L0
0L1L10000001L1L0
0L1L10LLLL01L1L0
0L1L10L11L01L1L0
0L1L10L11L01L1L0
0L1L10LLLL01L1L0
0L1L10000001L1L0
0L1L11111111L1L0
0L1LLLLLLLLLL1L0
0L111111111111L0
0LLLLLLLLLLLLLL0
0000000000000000`],
  [ secret, bitmap`
0000000000000000
0LLLLLLLLLLLLLL0
0L111111111111L0
0L100000000001L0
0L10LLLLLLLL01L0
0L10L111111L01L0
0L10L100001L01L0
0L10L10LL01L01L0
0L10L10LL01L01L0
0L10L100001L01L0
0L10L111111L01L0
0L10LLLLLLLL01L0
0L100000000001L0
0L111111111111L0
0LLLLLLLLLLLLLL0
0000000000000000` ],
  [ info, bitmap`
................
.LL.............
.L.L............
.L.L............
.LL.............
.L.L.L.L........
.L.L.L.L........
..L...L.........
.......L........
.....L.L........
......L.........
..L.............
.L.L........L...
..L...L.L.......
.L.L...L..L.L...
..L...L.L.LLL...` ],
  [ cross, bitmap`
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
3333333333333333
3333333333333333
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD
DDDDDDD33DDDDDDD` ],
  [ "u", bitmap`
5555555555555555
5555555555555555
555555.555555555
555.5.5555555555
55555.5555555555
555.5.5555555555
555555.555555555
5555555555555555
5555555555555555
5555535553555555
5555553535555555
5555555355555555
5555553535555555
5555535553555555
5555555555555555
5555555555555555`],
  [ "w", bitmap`
.0L123C756F4D8H9
00L123C756F4D8H9
LLL123C756F4D8H9
111123C756F4D8H9
222000C70004D8H9
333033C706F4D8H9
CCC0C0C70604D8H9
777000770004D8H9
5555555556F4D8H9
6666666666F4D8H9
FFFFFFFFFFF4D8H9
444444444444D8H9
DDDDDDDDDDDDD8H9
88888888888888H9
HHHHHHHHHHHHHHH9
9999999999999999`]
  

)

// setBackground(background);

setSolids([
    player1, 
    player2, 
    wall, 
    upLaser,
    downLaser,
    leftLaser,
    rightLaser,
    background
  ])

let level = 0;
const levels = [
    map`
iiiiiii
2222222
...7...
9..7...
9..7.2.
60...1.
...3...`,
    map`
iiiiiii
2222222
9..7...
6888888
9..7.2.
.0.7.1.
.2.3...`,
    map`
222222b...bb4.....bbbbbbiii
222222b.bbb...b.b.b....biii
222222b.b...b.b.b...bb.biii
222222b.b.bbb.b.bbbbbb.biii
222222b.b.....b.u...5b.biii
2222246.b..5bbbbsbb.bb.biii
22222......b...49u..bb.biii
2222u......u..1.....bb.biii
22222......b22..5b...b.biii
22222......b.......b.b.biii
22222......u0...9u.b.b.biii
2222u......bbbbbbbsb.b.b...
22222......b2bbb.....b.b...
22222222bbbb2b...bbb.b.b...
4222222222222b.b...bwb.b...
.bbbbbbbbbbbbb.b.bbbbb.b...
...............b.....b.b...
bbbbbbbbbbbbbb.bbbbb.b.b...
6.....b.....bb.b.....b.b...
bbbbbub.b.b..b.b.bbbbb.b...
....bub.b.bbbb.b.......b...
....bub.b......bbbbbbbbb...
....b.b.bbbbbbbbb..........
....b.b.......bbb..........
....b.b.bb.bb.bbb..www.....
....b.b..b..b..bb..w.w.....
....b.bb.bb.bb.bb..wwwu.u.u
....b.bb.bb.bb.bb..w.w.u...
....b.bb.bb.bb.bb..wwwu.u.u
....b.bbubbwbbubb.........u
....b.bb.bb.bb.bb.......uu.
....b.bb.bb.bb.bb..........
....b.b6.bb.bb.5b..........
....b.bbbbb.bbbbb..........
....2.......2..............`,
    map`
w`
];


let activePlayer = player1;

const getActivePlayer = () => getFirst(activePlayer);

setMap(levels[level]);
initLasers();

onInput("w", _ => {
    const p1 = getFirst(player1);
    const p2 = getFirst(player2);

    if (!p1 || !p2) return;

    if (p1.y < p2.y) {
        p1.y -= 1;
        p2.y -= 1;
    } else {
        p2.y -= 1;
        p1.y -= 1;
    }

})

onInput("s", _ => {
    const p1 = getFirst(player1);
    const p2 = getFirst(player2);

    if (!p1 || !p2) return;

    if (p1.y > p2.y) {
        p1.y += 1;
        p2.y += 1;
    } else {
        p2.y += 1;
        p1.y += 1;
    }
})

onInput("a", _ => {
    const p1 = getFirst(player1);
    const p2 = getFirst(player2);

    if (!p1 || !p2) return;

    if (p1.x < p2.x) {
        p1.x -= 1;
        p2.x -= 1;
    } else {
        p2.x -= 1;
        p1.x -= 1;
    }
})

onInput("d", _ => {
    const p1 = getFirst(player1);
    const p2 = getFirst(player2);

    if (!p1 || !p2) return;
    
    if (p1.x > p2.x) {
        p1.x += 1;
        p2.x += 1;
    } else {
        p2.x += 1;
        p1.x += 1;
    }
})

/* reset level */
onInput("j", _ => setMap(levels[level]));

function isJustLaser(t) {
  return t.length === 1 
    && (t.map(x => x.type).includes(vert)
        || t.map(x => x.type).includes(horz)
        || t.map(x => x.type).includes(player2));
}

function initLasers() {
    // remove all lasers
    getAll(horz).forEach(s => s.remove());
    getAll(vert).forEach(s => s.remove());

    // add lasers back in
    getAll(upLaser).forEach(up => {
        let { x, y } = up;
        y -=1
        while (true) {
            if (y < 0) break;
            const t = getTile(x, y);
            if (t.length === 0 || isJustLaser(t)) addSprite(x, y, vert)
            else break;
            y--;
        }
    })

    getAll(downLaser).forEach(down => {
        let { x, y } = down;
        y +=1
        while (true) {
            if (y >= height()) break;
            const t = getTile(x, y);
            if (t.length === 0 || isJustLaser(t)) addSprite(x, y, vert)
            else break;
            y++;
        }
    })

    getAll(rightLaser).forEach(right => {
        let { x, y } = right;
        x +=1
        while (true) {
            if (x >= width()) break;
            const t = getTile(x, y);
            if (t.length === 0 || isJustLaser(t)) addSprite(x, y, horz)
            else break;
            x++;
        }
    })

   getAll(leftLaser).forEach(left => {
        let { x, y } = left;
        x -=1
        while (true) {
            if (x < 0) break;
            const t = getTile(x, y);
            if (t.length === 0 || isJustLaser(t)) addSprite(x, y, horz)
            else break;
            x--;
        }
    })

}

afterInput(_ => {
    initLasers();
    let finished = true;
    getAll(target).forEach(t => {
        finished = getTile(t.x, t.y).length === 2 && finished;
    })

    const dead = [
        ...tilesWith(player2, vert),
        ...tilesWith(player2, horz)
    ]
    if (dead.length) {
        getFirst(player2).remove()
        setMap(map`u`)
    }

    if (finished && level+1 < levels.length) setMap(levels[++level]);
});
