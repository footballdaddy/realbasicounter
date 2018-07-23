export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const increment = number => ({
  type: 'INCREMENT_COUNTER',
  payload: number,
});

export const decrement = number => ({
  type: 'DECREMENT_COUNTER',
  payload: number,
});
