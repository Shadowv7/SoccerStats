module.exports = class Top {
  constructor($) {
    const stats = $('.best').get(0)
    const goalKeeperPodium = []
    for (let i = 0; i < 3;i++){

    /* GOALKEEPER */

      const goalKeeperPodiumObject = {
      "name" : stats.children[1].children[1].children[i].children[2].children[0].children[0].data.trim(),
        "nationality": stats.children[1].children[1].children[i].children[1].attribs.title.trim(),
        "score": stats.children[1].children[1].children[i].children[3].children[0].data.trim()
    }
      goalKeeperPodium.push(goalKeeperPodiumObject)
      /* LETERAL DEFENDERS */
  }
      const lateralDefendersPodium = []
      for (let i = 0; i < 3; i++) {
        const lateralDefendersPodiumObject = {
          "name": stats.children[2].children[1].children[i].children[2].children[0].children[0].data.trim(),
          "nationality": stats.children[2].children[1].children[i].children[1].attribs.title.trim(),
          "score": stats.children[2].children[1].children[i].children[3].children[0].data.trim()
        }
        lateralDefendersPodium.push(lateralDefendersPodiumObject)
  }
    /* CENTRAL DEFENDERS */
    const centralDefendersPodium = []
    for (let i = 0; i < 3; i++) {
      const centralDefendersPodiumObject = {
        "name": stats.children[3].children[1].children[i].children[2].children[0].children[0].data.trim(),
        "nationality": stats.children[3].children[1].children[i].children[1].attribs.title.trim(),
        "score": stats.children[3].children[1].children[i].children[3].children[0].data.trim()
      }
      centralDefendersPodium.push(centralDefendersPodiumObject)
    }
    /* CENTRAL MIDFIELDER */
    const centralMidfieldersPodium = []
    for (let i = 0; i < 3; i++) {
      const centralMidfieldersPodiumObject = {
        "name": stats.children[4].children[1].children[i].children[2].children[0].children[0].data.trim(),
        "nationality": stats.children[4].children[1].children[i].children[1].attribs.title.trim(),
        "score": stats.children[4].children[1].children[i].children[3].children[0].data.trim()
      }
      centralMidfieldersPodium.push(centralMidfieldersPodiumObject)
    }
    /* OFFENSIVE MIDFIELDER */
    const offensiveMidfieldersPodium = []
    for (let i = 0; i < 3; i++) {
      const offensiveMidfieldersPodiumObject = {
        "name": stats.children[5].children[1].children[i].children[2].children[0].children[0].data.trim(),
        "nationality": stats.children[5].children[1].children[i].children[1].attribs.title.trim(),
        "score": stats.children[5].children[1].children[i].children[3].children[0].data.trim()
      }
      offensiveMidfieldersPodium.push(offensiveMidfieldersPodiumObject)
    }
    
    /* FORWARD */
    const forwardPodium = []
    for (let i = 0; i < 3; i++) {
      const forwardPodiumObject = {
        "name": stats.children[6].children[1].children[i].children[2].children[0].children[0].data.trim(),
        "nationality": stats.children[6].children[1].children[i].children[1].attribs.title.trim(),
        "score": stats.children[6].children[1].children[i].children[3].children[0].data.trim()
      }
      forwardPodium.push(forwardPodiumObject)
    }
    this.forwardPodium = forwardPodium;
    this.offensiveMidfieldersPodium = offensiveMidfieldersPodium;
    this.centralMidfieldersPodium = centralMidfieldersPodium;
    this.centralDefendersPodium = centralDefendersPodium;
    this.lateralDefendersPodium = lateralDefendersPodium;
    this.goalKeeperPodium = goalKeeperPodium;
}
  }

