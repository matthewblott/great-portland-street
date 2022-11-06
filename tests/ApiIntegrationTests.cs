namespace tests;

using api;
using GreatPortlandStreet.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Newtonsoft.Json;
using Shouldly;

[TestFixture]
public class ApiIntegrationTests
{
  private TestServer _testServer;
  private HttpClient _testClient;

  [SetUp]
  public void Setup()
  {
    _testServer = new TestServer(new WebHostBuilder().UseStartup<Startup>());
    _testClient = _testServer.CreateClient();
  }

  [TearDown]
  public void TearDown()
  {
    _testClient?.Dispose();
    _testServer?.Dispose();
  }

  [Test]
  public async Task Should_return_records()
  {
    var request = new HttpRequestMessage(HttpMethod.Get, "/TravelStop");
    var response = await _testClient.SendAsync(request);
    var content = await response.Content.ReadAsStringAsync();
    
    var stops = JsonConvert.DeserializeObject<IEnumerable<TravelStop>>(content);

    stops.ShouldNotBeNull();

  }
  
}