const noop = () => {};

export default class Logger
{

	get debug()
	{
		return noop;
	}

	get warn()
	{
		return noop;
	}

	get error()
	{
		return noop;
	}
}
