namespace GreatPortlandStreet.Controllers;

using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

[ApiController]
[Route("[controller]")]
public class TravelStopController : ControllerBase
{
  private readonly ITravelStopService _travelStopService;
  
  public TravelStopController(ITravelStopService travelStopService)
  {
    _travelStopService = travelStopService;
  }
  
  //public string Get() => "Hello World!";
  
  public async Task<IEnumerable<TravelStop>> Get(CancellationToken token) 
    => await _travelStopService.GetTravelStops(token);
  
}