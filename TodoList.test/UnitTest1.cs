using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TodoList.API.Controllers;
using TodoList.API.Models;

namespace TodoList.test
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public async System.Threading.Tasks.Task CreatesATodo()
        {
            var builder = new DbContextOptionsBuilder<TodoContext>();
            builder.UseInMemoryDatabase();
            var options = builder.Options;
            var todoContext = new TodoContext(options);
            var todoController = new TodoController(todoContext);

            var newTodo = new TodoItem();
            newTodo.Description = "test todo";

            var result = await todoController.Post(newTodo);
            Assert.IsInstanceOfType(result, typeof(CreatedAtRouteResult));
        }


    }
}
