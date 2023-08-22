import { IContext } from './model'
import { createContext } from 'react'

export const AppContext = createContext<IContext>(null as any)