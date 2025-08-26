// 状態
export const State = Object.freeze({
  NORMAL: "normal", // 通常
  ALARM_SET: "alarmSet", // アラームセット中
  ALARM_SOUNDING: "sounding", // アラーム鳴動中
  SNOOZING: "snoozing", // スヌーズ中
});

// アクション
export const Action = Object.freeze({
  NONE: "none", // 何もしない
  SOUND_ALARM: "sound", // アラームを鳴らす
  STOP_ALARM: "stop", // アラームを止める
});

// イベント
export const Event = Object.freeze({
  SET_ALARM: "setAlarm",
  CANCEL_ALARM: "cancelAlarm",
  REACHED_TIME: "reachedTime",
  SNOOZE: "snooze",
  ELAPSE_SNOOZE: "elapseSnooze",
});

/**
 * 状態遷移関数
 * @param {string} state 現在の状態
 * @param {string} event 発生したイベント
 * @returns {{state: string, action: string}}
 */
export function transition(state, event) {
  switch (state) {
    case State.NORMAL:
      if (event === Event.SET_ALARM) {
        return { state: State.ALARM_SET, action: Action.NONE };
      }
      return { state, action: Action.NONE };

    case State.ALARM_SET:
      if (event === Event.CANCEL_ALARM) {
        return { state: State.NORMAL, action: Action.NONE };
      }
      if (event === Event.REACHED_TIME) {
        return { state: State.ALARM_SOUNDING, action: Action.SOUND_ALARM };
      }
      return { state, action: Action.NONE };

    case State.ALARM_SOUNDING:
      if (event === Event.CANCEL_ALARM) {
        return { state: State.NORMAL, action: Action.STOP_ALARM };
      }
      if (event === Event.SNOOZE) {
        return { state: State.SNOOZING, action: Action.STOP_ALARM };
      }
      return { state, action: Action.NONE };

    case State.SNOOZING:
      if (event === Event.CANCEL_ALARM) {
        return { state: State.NORMAL, action: Action.NONE };
      }
      if (event === Event.ELAPSE_SNOOZE) {
        return { state: State.ALARM_SOUNDING, action: Action.SOUND_ALARM };
      }
      return { state, action: Action.NONE };

    default:
      throw new Error(`Unknown state: ${state}`);
  }
}
