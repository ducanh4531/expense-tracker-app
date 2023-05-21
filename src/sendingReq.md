<!-- to send a request to sv,
=> can use fetch() function
=> but prefer to use axios

all promise have a method called then
and put a callback function inside then
that callback func will be executed when promise is resolved
and after then, use catch method to catch error because
error can happen while fetching data (network, server problems, etc.)

get => promise => resolve: res / reject: err
besides using then/catch, put await next to promise to get the resolve
and await expressions are only worked within async func
in addition to, need to create another async func inside useEffect
can't add async to callback func in useEffect then calling that func

if promise gets rejected => error => so wrap the async func into try catch block

note: type annotation is not allowed in a catch clause => fix:
eg: setError((err as AxiosError).message)
-->
