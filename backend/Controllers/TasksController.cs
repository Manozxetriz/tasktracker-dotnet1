using Microsoft.AspNetCore.Mvc;
using TaskTrackerAPI.Models;

namespace TaskTrackerAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private static List<TaskItem> tasks = new();

        [HttpGet]
        public ActionResult<IEnumerable<TaskItem>> Get() => Ok(tasks);

        [HttpPost]
        public ActionResult<TaskItem> Post(TaskItem task)
        {
            task.Id = tasks.Count + 1;
            tasks.Add(task);
            return Ok(task);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, TaskItem updated)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task is null) return NotFound();
            task.Title = updated.Title;
            task.IsCompleted = updated.IsCompleted;
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var task = tasks.FirstOrDefault(t => t.Id == id);
            if (task is null) return NotFound();
            tasks.Remove(task);
            return NoContent();
        }
    }
}
