const restructureGameInfo = (gameInfo) => {
    const {data} = gameInfo.data

    //Future restructured array of sports
    let result = [];
    
    //Adding sports to result
    data.forEach((item, index) => {
        //Checking if sport has been already added
        let found = result.filter(sport => {return item.sport.id === sport.id}).length;
        //if not adding
        if(!found){
            result.push({...item.sport, regions:[]})
        }
        //deleting unnecessary information
        delete result[result.length - 1].alias;
    })

    //Adding regions to sports
    data.forEach((item, itemIndex) => {
        //For more desc check 1st loop
        result.forEach((sport, sportIndex) => {
            const {regions} = sport;
            let found = regions.filter(region => {return region.id === item.region.id}).length;
            if(item.sport.id === sport.id && !found){
                regions.push({...item.region, tournaments:[]})
                delete regions[regions.length - 1].alias
            }
        })
    })

    //Adding tournaments to regions
    data.forEach((item, itemIndex) => {
        //For more desc check 1st loop
        result.forEach((sport, sportIndex) => {
            sport.regions.forEach((region, regionIndex) => {
                const {tournaments} = region;
                let found = tournaments.filter(tournament => {return tournament.id === item.tournament.id}).length;
                if(item.sport.id === sport.id && item.region.id === region.id && !found){
                    tournaments.push({...item.tournament, games:[]})
                    delete tournaments[tournaments.length - 1].alias
                }
            })
        })
    })

    //Adding games to tournaments
    data.forEach((item, itemIndex) => {
        //For more desc check 1st loop
        result.forEach((sport, sportIndex) => {
            sport.regions.forEach((region, regionIndex) => {
                region.tournaments.forEach((tournament, tournamentIndex) => {
                    const {games} = tournament;
                    let found = games.filter(game => {return game.id === item._id}).length;
                    if(item.sport.id === sport.id && item.region.id === region.id && item.tournament.id === tournament.id && !found){
                        games.push({...item, id:item._id})
                        delete games[games.length - 1].alias
                        delete games[games.length - 1]._id
                        delete games[games.length - 1].sport
                        delete games[games.length - 1].region
                        delete games[games.length - 1].tournament
                    }
                })
            })
        })
    })

    return result;
}

export default restructureGameInfo;