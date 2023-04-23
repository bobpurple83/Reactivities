using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command :IRequest{
            public Guid Id { get; set; }
        }

        public class Hendler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
            public Hendler(DataContext context)
            {
            _context = context;

            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                _context.Remove(activity);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}