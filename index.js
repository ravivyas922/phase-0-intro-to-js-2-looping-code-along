// Code your solutions in this file
function writeCards(arr, event)
{
    let newArray = [...arr];
    for (let i = 0; i <arr.length; i++)
    {
        newArray[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
    }
    return newArray;
}

function countDown(int)
{
    while(int >=0)
    {
        console.log(int);
        int--;
    }
}