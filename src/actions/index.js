export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const TURN_OFF = 'TURN_OFF';
export const TURN_ON = 'TURN_ON';

export const increment = number => ({
  type: 'INCREMENT_COUNTER',
  payload: number,
});

export const decrement = number => ({
  type: 'DECREMENT_COUNTER',
  payload: number,
});

export const turnOff = () => ({
  type: TURN_OFF,
});
export const turnOn = () => ({
  type: TURN_ON,
});
