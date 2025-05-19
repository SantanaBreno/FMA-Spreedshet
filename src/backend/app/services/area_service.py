from sqlalchemy.orm import Session
from app.models.area_models import Area

class AreaService:
    def __init__(self, db_session: Session):
        self.db_session  = db_session

    def insert(self, areas):
        createds = []
        for area in areas:
            if not self.db_session.query(Area).filter_by(name=area.name).first():
                new = Area(name=area.name.strip())
                self.db_session.add(new)
                createds.append(new)
        self.db_session.commit()
        return {"adicionadas": [a.name for a in createds]}

