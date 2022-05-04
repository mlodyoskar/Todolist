import React from "react"
import { Wrapper } from "./Layout.styles.js"

const Layout = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
)

export { Layout };