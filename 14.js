function distanceTravel(cost)
{
    let dist=0;
    if(cost!=0)
    {
        dist++;
        cost-=3;
    }
    while (cost!=0)
    {
        dist++;
        cost-=2;
    }
    return dist;
}
console.log(distanceTravel(9));