const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 300), []);
const debouncedEventHandler = useMemo(() => debounce(eventHandler, 300), [prop, stateValue]);

useEffect(() => {
    return () => debouncedChangeHandler.cancel()
}, []);

useEffect(() => {
  let timerId = setTimeout(() => {
    setValue('New value');
    timerId = null;
  }, 3000);
  return () => clearTimeout(timerId);
}, []);

useEffect(() => {
  const handleResize = throttle(() => {
    // Handle window resize...
  }, 300);
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
    handleResize.cancel();
  };
}, []);

useEffect(() => {
  const socket = new WebSocket("wss://www.example.com/ws");
  socket.onmessage = (event) => {
    setValue(JSON.parse(event.data));
  };
  return () => socket.close();
}, []);
