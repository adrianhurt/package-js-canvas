import pingpong from './pingpong'

test('answers "pong!" when you say "ping"', () => {
	expect(pingpong('ping')).toBe('pong!')
})

test('answers a message when you don\'t say "ping"', () => {
	expect(pingpong('foo')).not.toBe('pong!')
})
