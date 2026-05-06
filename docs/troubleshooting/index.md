# Troubleshooting

Common issues and solutions for DClaw Knowledge.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-knowledge

# Check logs
kubectl logs -n dclaw-knowledge deployment/dclaw-knowledge-backend

# Check database
kubectl get clusters -n dclaw-knowledge
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
