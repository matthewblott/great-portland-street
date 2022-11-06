namespace GreatPortlandStreet.Services;
using Models;

public interface ITravelStopService
{
  Task<IEnumerable<TravelStop>> GetTravelStops(CancellationToken token);
}