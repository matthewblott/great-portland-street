using GreatPortlandStreet.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddHttpClient();
builder.Services.AddScoped<ITravelStopService, TravelStopService>();

var app = builder.Build();

app.MapControllers();
app.UseFileServer();
app.Run();