Deploy the application to Vercel.

Steps:
1. Verify the build passes: `pnpm build`
2. If not already linked, run `vercel link` to connect the project
3. Set required environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (for server-side operations)
4. Deploy: `vercel --prod`
5. Output the deployment URL

Deploy arguments: $ARGUMENTS
