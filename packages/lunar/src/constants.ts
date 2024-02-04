/**
 * 天干速查表
 *
 * "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"
 */
export const HEAVENLY_STEMS = [
  '\u7532',
  '\u4e59',
  '\u4e19',
  '\u4e01',
  '\u620a',
  '\u5df1',
  '\u5e9a',
  '\u8f9b',
  '\u58ec',
  '\u7678'
]

/**
 * 地支速查表
 *
 * "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"
 */
export const EARTHLY_BRANCHES = [
  '\u5b50',
  '\u4e11',
  '\u5bc5',
  '\u536f',
  '\u8fb0',
  '\u5df3',
  '\u5348',
  '\u672a',
  '\u7533',
  '\u9149',
  '\u620c',
  '\u4ea5'
]

/**
 * 十二生肖
 *
 * "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"
 */
export const ZODIAC = [
  '\u9f20',
  '\u725b',
  '\u864e',
  '\u5154',
  '\u9f99',
  '\u86c7',
  '\u9a6c',
  '\u7f8a',
  '\u7334',
  '\u9e21',
  '\u72d7',
  '\u732a'
]

/**
 * 二十四节气
 *
 * "小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨",
 * "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑",
 * "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"
 */
export const SOLAR_TERMS = [
  '\u5c0f\u5bd2',
  '\u5927\u5bd2',
  '\u7acb\u6625',
  '\u96e8\u6c34',
  '\u60ca\u86f0',
  '\u6625\u5206',
  '\u6e05\u660e',
  '\u8c37\u96e8',
  '\u7acb\u590f',
  '\u5c0f\u6ee1',
  '\u8292\u79cd',
  '\u590f\u81f3',
  '\u5c0f\u6691',
  '\u5927\u6691',
  '\u7acb\u79cb',
  '\u5904\u6691',
  '\u767d\u9732',
  '\u79cb\u5206',
  '\u5bd2\u9732',
  '\u971c\u964d',
  '\u7acb\u51ac',
  '\u5c0f\u96ea',
  '\u5927\u96ea',
  '\u51ac\u81f3'
]

/**
 * 二十四节气间隔表（单位：秒）
 */
export const SOLAR_TERM_INTERVALS = [
  0.0, 1272494.4, 2548020.6, 3830143.8, 5120226.6, 6420865.8, 7732018.8,
  9055272.6, 10388958.0, 11733065.4, 13084292.4, 14441592.0, 15800560.8,
  17159347.2, 18513766.2, 19862002.2, 21201005.4, 22529659.8, 23846845.2,
  25152606.0, 26447687.4, 27733451.4, 29011921.2, 30285477.6
]

/**
 * 地球公转周期（单位：秒）
 */
export const EARTH_REVOLUTION_PERIOD = 31556925974.7

/**
 * 中国月
 *
 * "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"
 */
export const CN_MONTHS = [
  '\u6b63',
  '\u4e8c',
  '\u4e09',
  '\u56db',
  '\u4e94',
  '\u516d',
  '\u4e03',
  '\u516b',
  '\u4e5d',
  '\u5341',
  '\u5341\u4e00',
  '\u5341\u4e8c'
]

/**
 * 中国日
 *
 * "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
 * "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "廿十",
 * "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"
 */
export const CN_DAYS = [
  '\u521d\u4e00',
  '\u521d\u4e8c',
  '\u521d\u4e09',
  '\u521d\u56db',
  '\u521d\u4e94',
  '\u521d\u516d',
  '\u521d\u4e03',
  '\u521d\u516b',
  '\u521d\u4e5d',
  '\u521d\u5341',
  '\u5341\u4e00',
  '\u5341\u4e8c',
  '\u5341\u4e09',
  '\u5341\u56db',
  '\u5341\u4e94',
  '\u5341\u516d',
  '\u5341\u4e03',
  '\u5341\u516b',
  '\u5341\u4e5d',
  '\u5eff\u5341',
  '\u5eff\u4e00',
  '\u5eff\u4e8c',
  '\u5eff\u4e09',
  '\u5eff\u56db',
  '\u5eff\u4e94',
  '\u5eff\u516d',
  '\u5eff\u4e03',
  '\u5eff\u516b',
  '\u5eff\u4e5d',
  '\u4e09\u5341'
]

/**
 * 闰月速查表, 从 1890 至 2100 年
 */
export const LEAP_MONTH_MAP = [
  2, 0, 6, 0, 0, 5, 0, 0, 3, 0, 8, 0, 0, 5, 0, 0, 4, 0, 0, 2, 0, 6, 0, 0, 5, 0,
  0, 2, 0, 7, 0, 0, 5, 0, 0, 4, 0, 0, 2, 0, 6, 0, 0, 5, 0, 0, 3, 0, 7, 0, 0, 6,
  0, 0, 4, 0, 0, 2, 0, 7, 0, 0, 5, 0, 0, 3, 0, 8, 0, 0, 6, 0, 0, 4, 0, 0, 3, 0,
  7, 0, 0, 5, 0, 0, 4, 0, 8, 0, 0, 6, 0, 0, 4, 0, 10, 0, 0, 6, 0, 0, 5, 0, 0, 3,
  0, 8, 0, 0, 5, 0, 0, 4, 0, 0, 2, 0, 7, 0, 0, 5, 0, 0, 4, 0, 9, 0, 0, 6, 0, 0,
  4, 0, 0, 2, 0, 6, 0, 0, 5, 0, 0, 3, 0, 11, 0, 0, 6, 0, 0, 5, 0, 0, 2, 0, 7, 0,
  0, 5, 0, 0, 3, 0, 8, 0, 0, 6, 0, 0, 4, 0, 0, 3, 0, 7, 0, 0, 5, 0, 0, 4, 0, 8,
  0, 0, 6, 0, 0, 4, 0, 0, 3, 0, 7, 0, 0, 5, 0, 0, 4, 0, 8, 0, 0, 6, 0, 0, 4, 0,
  0, 2, 0
]

/**
 * 大年初一对应公历日期速查表, 从 1890 至 2100 年
 */
export const SPRING_FESTIVAL_DATE_MAP = [
  [1, 21],
  [2, 9],
  [1, 30],
  [2, 17],
  [2, 6],
  [1, 26],
  [2, 13],
  [2, 2],
  [1, 22],
  [2, 10],
  [1, 30],
  [2, 19],
  [2, 8],
  [1, 29],
  [2, 16],
  [2, 4],
  [1, 25],
  [2, 13],
  [2, 2],
  [1, 22],
  [2, 10],
  [1, 30],
  [2, 18],
  [2, 6],
  [1, 26],
  [2, 14],
  [2, 3],
  [1, 23],
  [2, 11],
  [2, 1],
  [2, 20],
  [2, 8],
  [1, 28],
  [2, 16],
  [2, 5],
  [1, 24],
  [2, 13],
  [2, 2],
  [1, 23],
  [2, 10],
  [1, 30],
  [2, 17],
  [2, 6],
  [1, 26],
  [2, 14],
  [2, 4],
  [1, 24],
  [2, 11],
  [1, 31],
  [2, 19],
  [2, 8],
  [1, 27],
  [2, 15],
  [2, 5],
  [1, 25],
  [2, 13],
  [2, 2],
  [1, 22],
  [2, 10],
  [1, 29],
  [2, 17],
  [2, 6],
  [1, 27],
  [2, 14],
  [2, 3],
  [1, 24],
  [2, 12],
  [1, 31],
  [2, 18],
  [2, 8],
  [1, 28],
  [2, 15],
  [2, 5],
  [1, 25],
  [2, 13],
  [2, 2],
  [1, 21],
  [2, 9],
  [1, 30],
  [2, 17],
  [2, 6],
  [1, 27],
  [2, 15],
  [2, 3],
  [1, 23],
  [2, 11],
  [1, 31],
  [2, 18],
  [2, 7],
  [1, 28],
  [2, 16],
  [2, 5],
  [1, 25],
  [2, 13],
  [2, 2],
  [2, 20],
  [2, 9],
  [1, 29],
  [2, 17],
  [2, 6],
  [1, 27],
  [2, 15],
  [2, 4],
  [1, 23],
  [2, 10],
  [1, 31],
  [2, 19],
  [2, 7],
  [1, 28],
  [2, 16],
  [2, 5],
  [1, 24],
  [2, 12],
  [2, 1],
  [1, 22],
  [2, 9],
  [1, 29],
  [2, 18],
  [2, 7],
  [1, 26],
  [2, 14],
  [2, 3],
  [1, 23],
  [2, 10],
  [1, 31],
  [2, 19],
  [2, 8],
  [1, 28],
  [2, 16],
  [2, 5],
  [1, 25],
  [2, 12],
  [2, 1],
  [1, 22],
  [2, 10],
  [1, 29],
  [2, 17],
  [2, 6],
  [1, 26],
  [2, 13],
  [2, 3],
  [1, 23],
  [2, 11],
  [1, 31],
  [2, 19],
  [2, 8],
  [1, 28],
  [2, 15],
  [2, 4],
  [1, 24],
  [2, 12],
  [2, 1],
  [1, 22],
  [2, 10],
  [1, 30],
  [2, 17],
  [2, 6],
  [1, 26],
  [2, 14],
  [2, 2],
  [1, 23],
  [2, 11],
  [2, 1],
  [2, 19],
  [2, 8],
  [1, 28],
  [2, 15],
  [2, 4],
  [1, 24],
  [2, 12],
  [2, 2],
  [1, 21],
  [2, 9],
  [1, 29],
  [2, 17],
  [2, 5],
  [1, 26],
  [2, 14],
  [2, 3],
  [1, 23],
  [2, 11],
  [1, 31],
  [2, 19],
  [2, 7],
  [1, 27],
  [2, 15],
  [2, 5],
  [1, 24],
  [2, 12],
  [2, 2],
  [1, 22],
  [2, 9],
  [1, 29],
  [2, 17],
  [2, 6],
  [1, 26],
  [2, 14],
  [2, 3],
  [1, 24],
  [2, 10],
  [1, 30],
  [2, 18],
  [2, 7],
  [1, 27],
  [2, 15],
  [2, 5],
  [1, 25],
  [2, 12],
  [2, 1],
  [1, 21],
  [2, 9]
]

/**
 * 大小月排列表, 从 1890 至 2100 年
 */
export const MONTH_MAP = [
  '0101011010101000',
  '0101010110110000',
  '0010010110111000',
  '0010010101110000',
  '0101001010110000',
  '1010100101010000',
  '1110100101010000',
  '0110101010100000',
  '1010110101010000',
  '1010101101010000',
  '0100101101101000',
  '0100101011100000',
  '1010010101110000',
  '0101001001101000',
  '1101001001100000',
  '1101100101010000',
  '0110101010101000',
  '0101011010100000',
  '1001101011010000',
  '0100101011101000',
  '0100101011100000',
  '1010010011011000',
  '1010010011010000',
  '1101001001010000',
  '1101010100101000',
  '1011010101000000',
  '1101011010100000',
  '1001011011010000',
  '1001010110110000',
  '0100100110111000',
  '0100100101110000',
  '1010010010110000',
  '1011001001011000',
  '0110101001010000',
  '0110110101000000',
  '1010110110101000',
  '0010101101100000',
  '1001010101110000',
  '0100100101111000',
  '0100100101110000',
  '0110010010110000',
  '1101010010100000',
  '1110101001010000',
  '0110110101001000',
  '0101101011010000',
  '0010101101100000',
  '1001001101110000',
  '1001001011100000',
  '1100100101101000',
  '1100100101010000',
  '1101010010100000',
  '1101101001010000',
  '1011010101010000',
  '0101011010100000',
  '1010101011011000',
  '0010010111010000',
  '1001001011010000',
  '1100100101011000',
  '1010100101010000',
  '1011010010101000',
  '0110110010100000',
  '1011010101010000',
  '0101010110101000',
  '0100110110100000',
  '1010010110110000',
  '0101001010111000',
  '0101001010110000',
  '1010100101010000',
  '1110100101010000',
  '0110101010100000',
  '1010110101010000',
  '1010101101010000',
  '0100101101100000',
  '1010010101110000',
  '1010010101110000',
  '0101001001100000',
  '1110100100110000',
  '1101100101010000',
  '0101101010101000',
  '0101011010100000',
  '1001011011010000',
  '0100101011101000',
  '0100101011010000',
  '1010010011010000',
  '1101001001101000',
  '1101001001010000',
  '1101010100101000',
  '1011010101000000',
  '1011011010100000',
  '1001011011010000',
  '1001010110110000',
  '0100100110110000',
  '1010010010111000',
  '1010010010110000',
  '1011001001011000',
  '0110101001010000',
  '0110110101000000',
  '1010110110100000',
  '1010101101100000',
  '1001010101110000',
  '0100100101111000',
  '0100100101110000',
  '0110010010110000',
  '0110101001010000',
  '1110101001010000',
  '0110101100101000',
  '0101101011000000',
  '1010101101100000',
  '1001001101101000',
  '1001001011100000',
  '1100100101100000',
  '1101010010101000',
  '1101010010100000',
  '1101101001010000',
  '0101101010101000',
  '0101011010100000',
  '1010101011011000',
  '0010010111010000',
  '1001001011010000',
  '1100100101011000',
  '1010100101010000',
  '1011010010100000',
  '1011010101010000',
  '1010110101010000',
  '0101010110101000',
  '0100101110100000',
  '1010010110110000',
  '0101001010111000',
  '0101001010110000',
  '1010100100110000',
  '0111010010101000',
  '0110101010100000',
  '1010110101010000',
  '0100110110101000',
  '0100101101100000',
  '1010010101110000',
  '1010010011100000',
  '1101001001100000',
  '1110100100110000',
  '1101010100110000',
  '0101101010100000',
  '0110101101010000',
  '1001011011010000',
  '0100101011101000',
  '0100101011010000',
  '1010010011010000',
  '1101001001011000',
  '1101001001010000',
  '1101010100100000',
  '1101101010100000',
  '1011010110100000',
  '0101011011010000',
  '0100101011011000',
  '0100100110110000',
  '1010010010111000',
  '1010010010110000',
  '1010101001010000',
  '1011010100101000',
  '0110110100100000',
  '1010110110100000',
  '0101010110110000',
  '1001001101110000',
  '0100100101111000',
  '0100100101110000',
  '0110010010110000',
  '0110101001010000',
  '1110101001010000',
  '0110101100100000',
  '1010101101100000',
  '1010101011100000',
  '1001001011100000',
  '1100100101110000',
  '1100100101100000',
  '1101010010101000',
  '1101010010100000',
  '1101101001010000',
  '0101101010101000',
  '0101011010100000',
  '1010011011010000',
  '0101001011101000',
  '0101001011010000',
  '1010100101011000',
  '1010100101010000',
  '1011010010100000',
  '1011010101010000',
  '1010110101010000',
  '0101010110100000',
  '1010010111010000',
  '1010010110110000',
  '0101001010110000',
  '1010100100111000',
  '0110100100110000',
  '0111001010011000',
  '0110101010100000',
  '1010110101010000',
  '0100110110101000',
  '0100101101100000',
  '1010010101110000',
  '0101001001110000',
  '1101001001100000',
  '1110100100110000',
  '1101010100100000',
  '1101101010100000',
  '0110101101010000',
  '0101011011010000',
  '0100101011100000',
  '1010010011101000',
  '1010010011010000',
  '1101000101010000',
  '1101100100101000',
  '1101010100100000'
]

export const MIN_YEAR = 1890
export const MAX_YEAR = 2100
