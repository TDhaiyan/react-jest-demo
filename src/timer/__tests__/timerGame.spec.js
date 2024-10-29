const timerGame = require('../timerGame')

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')


test('waits 1 second before ending the game', () => {
    const callback = jest.fn();

    timerGame(callback);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
});