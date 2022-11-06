<script>

  import { onMount } from 'svelte'
  import {data, timeout} from './stores'
  import {writable} from 'svelte/store'

  const getData = async () => {

    let response = await fetch(`https://api.tfl.gov.uk/Stoppoint/940GZZLUGPS/Arrivals?mode=tube`)
    let values = await response.json()

    return values
  }

  onMount(async() => {
    $data = await getData()
  })

</script>

<div>

  <table>
    <thead>
      <th>Line</th>
      <th>Destination</th>
      <th>Platform</th>
      <th>Direction</th>
      <th>Expected</th>
    </thead>
    <tbody>

      {#each $data as { id, currentLocation, destinationName, platformName, direction, expectedArrival, lineName }}

        <tr>
          <td>{lineName}</td>
          <td>{destinationName}</td>
          <td>{platformName}</td>
          <td>{direction}</td>
          <td>{expectedArrival}</td>
        </tr>

      {/each}
    </tbody>

  </table>

</div>
