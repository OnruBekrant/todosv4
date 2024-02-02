import { palette } from "../theme/colors"
import { nanoid } from "nanoid/non-secure"

export const getColors=()=>{
    const colors: IColor[] = Object.keys(palette).map((paletteColor)=>{
        return {
            id: 'color_$(nanoid())',
            name: paletteColor,
            code: palette[paletteColor as keyof typeof palette]
        }
    })
}