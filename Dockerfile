FROM nginx:alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Create directory for the website
RUN mkdir -p /var/www/html

# Copy the built website
COPY out/ /var/www/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"] 