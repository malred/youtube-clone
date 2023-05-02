import React from 'react'
import ThemeProvider from './ThemeProvider'

const ContextProviders = ({ children }) => {
    return < ThemeProvider >
        {/* 日光/黑夜 主题 状态管理 */}
        {children}
    </ ThemeProvider >
}

export default ContextProviders