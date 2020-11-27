import React from "react"
import Normalize from "./normalize"
import Theme from "./theme"
import Global from "./global"

export default function Styles() {
  return (
    <>
      <Normalize />
      <Theme />
      <Global />
    </>
  )
}
