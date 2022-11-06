namespace api;

using Microsoft.AspNetCore;

internal class Program
{
  // private static void Main(string[] args)
  // {
  //   var builder = WebApplication.CreateBuilder(args);
  //   var startup = new Startup(builder.Configuration);
  //
  //   startup.ConfigureServices(builder.Services);
  //
  //   var app = builder;
  //
  //   startup.Configure(app, builder.Environment);
  //   
  // }
  //
  
  public static void Main(string[] args) =>
    WebHost.CreateDefaultBuilder(args).UseStartup<Startup>().Build().Run();
  
}