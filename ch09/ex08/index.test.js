import { State, Action, Event, transition } from "./index.js";

describe("AlarmClock state transitions", () => {
  const table = [
    // NORMAL
    {
      state: State.NORMAL,
      event: Event.SET_ALARM,
      next: State.ALARM_SET,
      action: Action.NONE,
    },
    {
      state: State.NORMAL,
      event: Event.CANCEL_ALARM,
      next: State.NORMAL,
      action: Action.NONE,
    },
    {
      state: State.NORMAL,
      event: Event.REACHED_TIME,
      next: State.NORMAL,
      action: Action.NONE,
    },
    {
      state: State.NORMAL,
      event: Event.SNOOZE,
      next: State.NORMAL,
      action: Action.NONE,
    },
    {
      state: State.NORMAL,
      event: Event.ELAPSE_SNOOZE,
      next: State.NORMAL,
      action: Action.NONE,
    },

    // ALARM_SET
    {
      state: State.ALARM_SET,
      event: Event.CANCEL_ALARM,
      next: State.NORMAL,
      action: Action.NONE,
    },
    {
      state: State.ALARM_SET,
      event: Event.REACHED_TIME,
      next: State.ALARM_SOUNDING,
      action: Action.SOUND_ALARM,
    },
    {
      state: State.ALARM_SET,
      event: Event.SET_ALARM,
      next: State.ALARM_SET,
      action: Action.NONE,
    },

    // ALARM_SOUNDING
    {
      state: State.ALARM_SOUNDING,
      event: Event.CANCEL_ALARM,
      next: State.NORMAL,
      action: Action.STOP_ALARM,
    },
    {
      state: State.ALARM_SOUNDING,
      event: Event.SNOOZE,
      next: State.SNOOZING,
      action: Action.STOP_ALARM,
    },
    {
      state: State.ALARM_SOUNDING,
      event: Event.SET_ALARM,
      next: State.ALARM_SOUNDING,
      action: Action.NONE,
    },

    // SNOOZING
    {
      state: State.SNOOZING,
      event: Event.CANCEL_ALARM,
      next: State.NORMAL,
      action: Action.NONE,
    },
    {
      state: State.SNOOZING,
      event: Event.ELAPSE_SNOOZE,
      next: State.ALARM_SOUNDING,
      action: Action.SOUND_ALARM,
    },
    {
      state: State.SNOOZING,
      event: Event.SET_ALARM,
      next: State.SNOOZING,
      action: Action.NONE,
    },
  ];

  test.each(table)(
    "from %s + %s → %s with action %s",
    ({ state, event, next, action }) => {
      const result = transition(state, event);
      expect(result.state).toBe(next);
      expect(result.action).toBe(action);
    }
  );
});
