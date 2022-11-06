namespace GreatPortlandStreet.Services;

using Models;
using Newtonsoft.Json;

public class TravelStopService : ITravelStopService
{
  private readonly IHttpClientFactory _httpClientFactory;
  
  public TravelStopService(IHttpClientFactory httpClientFactory)
  {
    _httpClientFactory = httpClientFactory;
  }
  
  public async Task<IEnumerable<TravelStop>> GetTravelStops(CancellationToken token)
  {
    const string url = "https://api.tfl.gov.uk/Stoppoint/940GZZLUGPS/Arrivals?mode=tube";

    using var client = _httpClientFactory.CreateClient();
    using var request = new HttpRequestMessage(HttpMethod.Get, url);
    using var response = await client.SendAsync(request, token);
    var content = await response.Content.ReadAsStringAsync(token);

    if (!response.IsSuccessStatusCode)
    {
      return null;
    }
    
    var allStops = JsonConvert.DeserializeObject<IEnumerable<TravelStop>>(content);
    var validStops = allStops.Where(x => !string.IsNullOrEmpty(x.DestinationName));
    
    return validStops;

  }
  
}