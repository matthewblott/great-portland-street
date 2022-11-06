namespace GreatPortlandStreet.Models;

public class TravelStop
{
  public int Id { get; set; }
  public string LineName { get; set; }
  public string DestinationName { get; set; }
  public string PlatformName { get; set; }
  public string Direction { get; set; }
  public DateTime ExpectedArrival { get; set; }
}