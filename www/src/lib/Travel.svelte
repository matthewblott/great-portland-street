<script>

  import { onMount } from 'svelte'
  import {data, timeout} from './stores'
  import {writable} from 'svelte/store'

  setInterval(async () => {
    $data = await getData()
    await sort()
  }, 5000)

$: fieldName = 'lineName'

  const getFieldName = (col) => {

    switch(col) {
      case 'Line':
        return 'lineName'
      case 'Destination':
        return 'destinationName'
      case 'Platform':
        return 'platformName'
      case 'Direction':
        return 'direction'
      case 'Expected':
        return 'expectedArrival'
      default:
        return 'lineName'
        
    }
  }

  const sort = () => {

    $data.sort((a, b) => {
      let aVal = Object.entries(a).find(x => x[0] === fieldName)[1]
      let bVal = Object.entries(b).find(x => x[0] === fieldName)[1]
      let retVal = aVal > bVal ? 1 : (bVal > aVal) ? -1 : 0

      return retVal

    })

    $data = $data

  }

  const toDateString = (date) => (new Date(date)).toISOString().substring(0, 10)
  const toTimeString = (date) => (new Date(date)).toISOString().substring(11, 16)

  const clickHandler = (s) => {
    let col = s.path[0].innerText
    fieldName = getFieldName(col)
    sort()
  }

  const getData = async () => {

    let response = await fetch(`https://api.tfl.gov.uk/Stoppoint/940GZZLUGPS/Arrivals?mode=tube`)
    let values = await response.json()
    let filtered = values.filter((val) => val.destinationName !== undefined)

    return filtered
  }

  onMount(async() => {
    $data = await getData()
  })

</script>

<div>

  <table>
    <thead>
      <th on:click={clickHandler}>Line</th>
      <th on:click={clickHandler}>Destination</th>
      <th on:click={clickHandler}>Platform</th>
      <th on:click={clickHandler}>Direction</th>
      <th on:click={clickHandler}>Expected</th>
    </thead>
    <tbody>

      {#each $data as { id, currentLocation, destinationName, platformName, direction, expectedArrival, lineName }}

        <tr>
          <td>{lineName}</td>
          <td>{destinationName === undefined ? '' : destinationName }</td>
          <td>{platformName}</td>
          <td>{direction === undefined ? '' : direction }</td>
          <td>{toDateString(expectedArrival)} {toTimeString(expectedArrival)}</td>
        </tr>

      {/each}
    </tbody>

  </table>

</div>