// 通过interface定义索引类型
interface IndexLanguage {
  [index: number]: string
}

const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue",
  // abc: "cba"
}

interface LanguageYear {
  [name: string]: number
}
const languageYear: LanguageYear = {
  c: 1972,
  java: 1995,
  javascript: 1996,
  typescript: 2014
}


