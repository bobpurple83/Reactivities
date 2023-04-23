using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>{

        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
        private readonly DataContext _contex;
            public Handler(DataContext contex)
            {
            _contex = contex;
                
            }
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _contex.Activities.ToListAsync();
            }
        }

    }
}