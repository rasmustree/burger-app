# Use a lightweight version of Nginx to serve the HTML file
FROM nginx:alpine

# Set production environment
ENV NODE_ENV=production

# Copy your custom nginx config file (if created)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the HTML file to Nginx's default directory
COPY kitchen_view.html /usr/share/nginx/html/index.html

# Expose port 80 for Nginx
EXPOSE 8080
