/** Тарифы подписки (базовые цены; итог может учитывать скидку колеса через API). */
export const SUBSCRIPTION_PLANS = [
  {
    id: '730',
    label: '2 года',
    price: 3699,
    discount: 50,
    months: 24,
    spins: 4,
    tickets: 24,
    popular: true,
  },
  {
    id: '365',
    label: '365 дней',
    price: 2399,
    discount: 33,
    months: 12,
    spins: 2,
    tickets: 12,
  },
  {
    id: '180',
    label: '180 дней',
    price: 1349,
    discount: 25,
    months: 6,
    spins: 1,
    tickets: 6,
  },
  {
    id: '90',
    label: '90 дней',
    price: 749,
    discount: 17,
    months: 3,
    spins: 0,
    tickets: 3,
  },
  {
    id: '30',
    label: '30 дней',
    price: 299,
    discount: null,
    months: 1,
    spins: 0,
    tickets: 1,
  },
  {
    id: '7',
    label: '7 дней',
    price: 99,
    discount: null,
    months: null,
    spins: 0,
    tickets: 0,
  },
];

export function planById(id) {
  return SUBSCRIPTION_PLANS.find((p) => p.id === id);
}

export function perMonthRub(plan) {
  if (!plan?.months) return null;
  return Math.round(plan.price / plan.months);
}
