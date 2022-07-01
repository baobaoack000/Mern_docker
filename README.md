# Mern_docker

1. **Docker Commmands**

- ` docker-compose up `                              # Create and start containers
- ` docker-compose up -d `                           # Create and start containers in detached mode
- ` docker-compose down  `                           # Stop and remove containers, networks, images, and volumes
- ` docker-compose logs  `                           # View output from containers
- ` docker-compose restart  `                        # Restart all service
- ` docker-compose pull  `                           # Pull all image service 
- ` docker-compose build  `                          # Build all image service
- ` docker-compose config   `                        # Validate and view the Compose file
- ` docker-compose scale <service_name>=<replica>`   # Scale special service(s)
- ` docker-compose top  `                            # Display the running processes
- ` docker-compose run -rm -p 2022:22 web bash `     # Start web service and runs bash as its command, remove old container.

