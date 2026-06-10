import type { PaymentConfig } from './types';

// Replace REPLACE_* values with your actual Stripe Payment Links.
// Set each Payment Link's Success URL to:
//   https://yourdomain.com/learn?access=FULL      (for full bundle)
//   https://yourdomain.com/learn?access=AI        (for AI bundle)
//   https://yourdomain.com/learn?access=STRATEGY  (for strategy bundle)
//   https://yourdomain.com/learn?access=MOD_4     (for individual modules)
export const PAYMENT: PaymentConfig = {
  bundles: {
    full:     'https://buy.stripe.com/REPLACE_FULL_ACCESS',
    ai:       'https://buy.stripe.com/REPLACE_AI_BUNDLE',
    strategy: 'https://buy.stripe.com/REPLACE_STRATEGY_BUNDLE',
  },
  modules: {
    4:  'https://buy.stripe.com/REPLACE_MOD4',
    5:  'https://buy.stripe.com/REPLACE_MOD5',
    6:  'https://buy.stripe.com/REPLACE_MOD6',
    7:  'https://buy.stripe.com/REPLACE_MOD7',
    8:  'https://buy.stripe.com/REPLACE_MOD8',
    9:  'https://buy.stripe.com/REPLACE_MOD9',
    10: 'https://buy.stripe.com/REPLACE_MOD10',
    11: 'https://buy.stripe.com/REPLACE_MOD11',
    12: 'https://buy.stripe.com/REPLACE_MOD12',
    13: 'https://buy.stripe.com/REPLACE_MOD13',
    14: 'https://buy.stripe.com/REPLACE_MOD14',
    15: 'https://buy.stripe.com/REPLACE_MOD15',
    16: 'https://buy.stripe.com/REPLACE_MOD16',
    17: 'https://buy.stripe.com/REPLACE_MOD17',
    18: 'https://buy.stripe.com/REPLACE_MOD18',
    19: 'https://buy.stripe.com/REPLACE_MOD19',
  },
};
