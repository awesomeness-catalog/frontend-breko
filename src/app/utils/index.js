import typeToReducer from 'type-to-reducer'

import get from './get'

import request from './request'

import { isPromise, hasWindow, isBrowser, isEnv } from './predicates'

import {
  compact,
  noop,
  isOneOf,
  filterNil,
  cleanProps,
  addKeyAsProperty,
} from './helpers'

import Bem from 'react-bem-helper'

import ConfigService from './ConfigService'

export {
  get,
  typeToReducer,
  request,

  isPromise,
  hasWindow,
  isBrowser,
  isEnv,

  compact,
  noop,
  isOneOf,
  filterNil,
  cleanProps,
  addKeyAsProperty,

  Bem,
  ConfigService,
}
