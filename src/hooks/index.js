import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"
// 主题切换
export const useTheme = () => useContext(ThemeContext) 