/**
 * Copyright (c) Overnight
 */

import type { Token } from '@/token'

type LeafId = string
type TokenId = string

type TokenWithId = [TokenId, Token]

export type { LeafId, TokenId, TokenWithId }
