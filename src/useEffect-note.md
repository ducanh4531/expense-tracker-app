// called after render
// useEffect
// tell react to execute a piece of code after a component is rendered
// use to fetch data from sv, manually modify DOM element, save data in local storage of browser
// all of them have nothing to do with returning JSX markup
// => they cause a side effect is changing something outside of the component
// => use useEffect can help to keep the component still pure

// useEffect has two arguments, the second one is optional and called effect dependencies
// it will decide the way useEffect working:
// not include it => useEffect will be called after every rendering
// empty array [] (include it when updating state inside)=> useEffect will be executed only once after the 1st rendering
// not empty array [dependency, otherDependency] => useEffect will be executed after a rendering if the dependencies changes

// sometimes need to clean up effect, for example: abort or ignore fetching data in the sv,
// hide modal, unsubscribe
// => cleanup function should stop or undo whatever the effect was doing
// const connect = () => console.log('Connecting')
// const disconnect = () => console.log('Disconnecting')

// useEffect(() => {
// connect();

// return () => disconnect();
// })
