/*!
 * QRCode constants
 */
// Mode according to ISO/IEC 18004:2006(E) Section 6.3
var MODE = {
  Numeric: 1,
  AlphaNumeric: 2,
  EightBit: 4,
  Terminator: 0
};

// Error correction level according to ISO/IEC 18004:2006(E) Section 6.5.1
var ERROR_CORRECTION_LEVEL = {
  L: 1,	//  7%
  M: 0,	// 15%
  Q: 3,	// 25%
  H: 2	// 30%
};

var ALIGNMENT_PATTERNS = [
  null,
  [],
  [6, 18],
  [6, 22],
  [6, 26],
  [6, 30],
  [6, 34],
  [6, 22, 38],
  [6, 24, 42],
  [6, 26, 46],
  [6, 28, 50],
  [6, 30, 54],
  [6, 32, 58],
  [6, 34, 62],
  [6, 26, 46, 66],
  [6, 26, 48, 70],
  [6, 26, 50, 74],
  [6, 30, 54, 78],
  [6, 30, 56, 82],
  [6, 30, 58, 86],
  [6, 34, 62, 90],
  [6, 28, 50, 72, 94],
  [6, 26, 50, 74, 98],
  [6, 30, 54, 78, 102],
  [6, 28, 54, 80, 106],
  [6, 32, 58, 84, 110],
  [6, 30, 58, 86, 114],
  [6, 34, 62, 90, 118],
  [6, 26, 50, 74, 98, 122],
  [6, 30, 54, 78, 102, 126],
  [6, 26, 52, 78, 104, 130],
  [6, 30, 56, 82, 108, 134],
  [6, 34, 60, 86, 112, 138],
  [6, 30, 58, 86, 114, 142],
  [6, 34, 62, 90, 118, 146],
  [6, 30, 54, 78, 102, 126, 150],
  [6, 24, 50, 76, 102, 128, 154],
  [6, 28, 54, 80, 106, 132, 158],
  [6, 32, 58, 84, 110, 136, 162],
  [6, 26, 54, 82, 110, 138, 166],
  [6, 30, 58, 86, 114, 142, 170]
];

var VERSION_INFO = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  0x07C94,
  0x085BC,
  0x09A99,
  0x0A4D3,
  0x0BBF6,
  0x0C762,
  0x0D847,
  0x0E60D,
  0x0F928,
  0x10B78,
  0x1145D,
  0x12A17,
  0x13532,
  0x149A6,
  0x15683,
  0x168C9,
  0x177EC,
  0x18EC4,
  0x191E1,
  0x1AFAB,
  0x1B08E,
  0x1CC1A,
  0x1D33F,
  0x1ED75,
  0x1F250,
  0x209D5,
  0x216F0,
  0x228BA,
  0x2379F,
  0x24B0B,
  0x2542E,
  0x26A64,
  0x27541,
  0x28C69
];

var FORMAT_INFO = [
  0x5412,
  0x5125,
  0x5E7C,
  0x5B4B,
  0x45F9,
  0x40CE,
  0x4F97,
  0x4AA0,
  0x77C4,
  0x72F3,
  0x7DAA,
  0x789D,
  0x662F,
  0x6318,
  0x6C41,
  0x6976,
  0x1689,
  0x13BE,
  0x1CE7,
  0x19D0,
  0x0762,
  0x0255,
  0x0D0C,
  0x083B,
  0x355F,
  0x3068,
  0x3F31,
  0x3A06,
  0x24B4,
  0x2183,
  0x2EDA,
  0x2BED
];

var CODEWORDS = [
  0,
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];

var EC_CODEWORDS = [
  null,
  [10, 7, 17, 13],
  [16, 10, 28, 22],
  [26, 15, 44, 36],
  [36, 20, 64, 52],
  [48, 26, 88, 72],
  [64, 36, 112, 96],
  [72, 40, 130, 108],
  [88, 48, 156, 132],
  [110, 60, 192, 160],
  [130, 72, 224, 192],
  [150, 80, 264, 224],
  [176, 96, 308, 260],
  [198, 104, 352, 288],
  [216, 120, 384, 320],
  [240, 132, 432, 360],
  [280, 144, 480, 408],
  [308, 168, 532, 448],
  [338, 180, 588, 504],
  [364, 196, 650, 546],
  [416, 224, 700, 600],
  [442, 224, 750, 644],
  [476, 252, 816, 690],
  [504, 270, 900, 750],
  [560, 300, 960, 810],
  [588, 312, 1050, 870],
  [644, 336, 1110, 952],
  [700, 360, 1200, 1020],
  [728, 390, 1260, 1050],
  [784, 420, 1350, 1140],
  [812, 450, 1440, 1200],
  [868, 480, 1530, 1290],
  [924, 510, 1620, 1350],
  [980, 540, 1710, 1440],
  [1036, 570, 1800, 1530],
  [1064, 570, 1890, 1590],
  [1120, 600, 1980, 1680],
  [1204, 630, 2100, 1770],
  [1260, 660, 2220, 1860],
  [1316, 720, 2310, 1950],
  [1372, 750, 2430, 2040]
];

var EC_BLOCKS = [
  [],
  [[1], [1], [1], [1]],
  [[1], [1], [1], [1]],
  [[1], [1], [2], [2]],
  [[2], [1], [4], [2]],
  [[2], [1], [2, 2], [2, 2]],
  [[4], [2], [4], [4]],
  [[4], [2], [4, 1], [2, 4]],
  [[2, 2], [2], [4, 2], [4, 2]],
  [[3, 2], [2], [4, 4], [4, 4]],
  [[4, 1], [2, 2], [6, 2], [6, 2]],
  [[1, 4], [4], [3, 8], [4, 4]],
  [[6, 2], [2, 2], [7, 4], [4, 6]],
  [[8, 1], [4], [12, 4], [8, 4]],
  [[4, 5], [3, 1], [11, 5], [11, 5]],
  [[5, 5], [5, 1], [11, 7], [5, 7]],
  [[7, 3], [5, 1], [3, 13], [15, 2]],
  [[10, 1], [1, 5], [2, 17], [1, 15]],
  [[9, 4], [5, 1], [2, 19], [17, 1]],
  [[3, 11], [3, 4], [9, 16], [17, 4]],
  [[3, 13], [3, 5], [15, 10], [15, 5]],
  [[17], [4, 4], [19, 6], [17, 6]],
  [[17], [2, 7], [34], [7, 16]],
  [[4, 14], [4, 5], [16, 14], [11, 14]],
  [[6, 14], [6, 4], [30, 2], [11, 16]],
  [[8, 13], [8, 4], [22, 13], [7, 22]],
  [[19, 4], [10, 2], [33, 4], [28, 6]],
  [[22, 3], [8, 4], [12, 28], [8, 26]],
  [[3, 23], [3, 10], [11, 31], [4, 31]],
  [[21, 7], [7, 7], [19, 26], [1, 37]],
  [[19, 10], [5, 10], [23, 25], [15, 25]],
  [[2, 29], [13, 3], [23, 28], [42, 1]],
  [[10, 23], [17], [19, 35], [10, 35]],
  [[14, 21], [17, 1], [11, 46], [29, 19]],
  [[14, 23], [13, 6], [59, 1], [44, 7]],
  [[12, 26], [12, 7], [22, 41], [39, 14]],
  [[6, 34], [6, 14], [2, 64], [46, 10]],
  [[29, 14], [17, 4], [24, 46], [49, 10]],
  [[13, 32], [4, 18], [42, 32], [48, 14]],
  [[40, 7], [20, 4], [10, 67], [43, 22]],
  [[18, 31], [19, 6], [20, 61], [34, 34]]
];

var ALPHANUM = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  ' ',
  '$',
  '%',
  '*',
  '+',
  '-',
  '.',
  '/',
  ':'
];

var ALPHANUM_REV = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15,
  'G': 16,
  'H': 17,
  'I': 18,
  'J': 19,
  'K': 20,
  'L': 21,
  'M': 22,
  'N': 23,
  'O': 24,
  'P': 25,
  'Q': 26,
  'R': 27,
  'S': 28,
  'T': 29,
  'U': 30,
  'V': 31,
  'W': 32,
  'X': 33,
  'Y': 34,
  'Z': 35,
  ' ': 36,
  '$': 37,
  '%': 38,
  '*': 39,
  '+': 40,
  '-': 41,
  '.': 42,
  '/': 43,
  ':': 44
};

export {
  MODE,
  ERROR_CORRECTION_LEVEL,
  ALIGNMENT_PATTERNS,
  VERSION_INFO,
  FORMAT_INFO,
  CODEWORDS,
  EC_CODEWORDS,
  EC_BLOCKS,
  ALPHANUM,
  ALPHANUM_REV
}
