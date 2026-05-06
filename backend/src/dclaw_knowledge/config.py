from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "DClaw Knowledge"
    database_url: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/dclaw_knowledge"
    cors_origins: str = "*"

    class Config:
        env_prefix = "KNOWLEDGE_"

settings = Settings()
