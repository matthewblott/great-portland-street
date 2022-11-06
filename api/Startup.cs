namespace api;

using GreatPortlandStreet.Services;

public class Startup
{
  public Startup(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  public IConfiguration Configuration { get; }

  public void ConfigureServices(IServiceCollection services)
  {
    services.AddControllers();
    services.AddEndpointsApiExplorer();
    services.AddHttpClient();
    services.AddScoped<ITravelStopService, TravelStopService>();
  }

  public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
  {
    // app.MapControllers();
    app.UseFileServer();
    // app.Run();
    app.UseRouting();
    // app.UseAuthentication();
    // app.UseAuthorization();
    app.UseEndpoints(endpoints =>
    {
      endpoints.MapControllerRoute("default", "{controller=Home}/{action=Index}");
    });    
  }
}