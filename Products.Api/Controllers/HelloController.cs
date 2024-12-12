using Microsoft.AspNetCore.Mvc;

namespace Products.Api.Controllers;

[ApiController] 
[Route("api/v1/[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public string Get()
    {
        return "Hello World!";
    }
}