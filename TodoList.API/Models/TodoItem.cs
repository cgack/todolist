using System;
using System.Collections.Generic;

namespace TodoList.API.Models
{
    public class TodoItem
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Detail { get; set; }
        public bool Complete { get; set; }
        public DateTime DueDate { get; set; }
    }
}
